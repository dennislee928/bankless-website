/**
 * Cloudflare Pages Cron Trigger stub — /api/news-cron
 *
 * Wire this to a Cloudflare Cron Trigger (hourly) in the Pages dashboard:
 *   Pages → your project → Settings → Functions → Cron Triggers
 *   Schedule: 0 * * * *  (every hour)
 *
 * Full implementation of the upstream fetch + KV write is in fetch-news.ts.
 */

interface Env {
  NEWS_KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async () => {
  // TODO: invoke fetchAndStoreNews(env) from fetch-news.ts
  return new Response(JSON.stringify({ status: 'stub — not yet implemented' }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
