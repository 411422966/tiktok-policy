import fs from 'fs'
import path from 'path'
import markdownToHtml from '../utils/markdownToHtml'
import Link from 'next/link'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'privacy-policy.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const content = await markdownToHtml(fileContent)
  return { props: { content } }
}

export default function Privacy({ content }: { content: string }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">隐私政策</h1>
      <div className="prose prose-neutral dark:prose-invert" dangerouslySetInnerHTML={{ __html: content }} />
      <Link href="/" className="block mt-10 text-blue-500 underline">返回服务条款</Link>
    </main>
  )
}