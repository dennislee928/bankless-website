import { Box, Heading, VStack, Spinner, Text } from '@chakra-ui/react'
import PageContainer from 'components/_common/page-container'
import NewsArticle from 'components/news/NewsArticle'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

interface Article {
  title: string
  summary: string
  url: string
}

const News: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news')
        if (!res.ok) {
          throw new Error('Failed to fetch news')
        }
        const data = await res.json()
        setArticles(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <PageContainer>
      <Box>
        <Heading as="h1" size="2xl" textAlign="center" my={10}>
          News
        </Heading>
        <VStack spacing={8}>
          {loading && <Spinner />}
          {error && <Text color="red.500">{error}</Text>}
          {articles.map((article, index) => (
            <NewsArticle key={index} article={article} />
          ))}
        </VStack>
      </Box>
    </PageContainer>
  )
}

export default News

