/**
 * Cloudflare Pages Function — GET /api/news
 *
 * Returns cached news articles from the NEWS_KV KV namespace.
 * Bind the KV namespace in the Cloudflare Pages dashboard:
 *   Settings → Functions → KV namespace bindings → Variable name: NEWS_KV
 */

const CORS_ORIGIN = 'https://bankless.community'

interface Env {
  NEWS_KV: KVNamespace
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': CORS_ORIGIN,
  }

  const cached = await env.NEWS_KV.get('latest_news')

  if (cached) {
    return new Response(cached, { headers })
  }

  return new Response(JSON.stringify({ articles: [], cached: false }), { headers })
}
