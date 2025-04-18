import fs from 'fs';
import path from 'path';
import remark from 'remark';  // 导入remark
import html from 'remark-html';  // 导入remark-html

export async function getStaticProps() {
  // 读取 terms-of-service.md 文件
  const termsOfServicePath = path.join(process.cwd(), 'public', 'terms-of-service.md');
  const termsOfService = fs.readFileSync(termsOfServicePath, 'utf-8');

  // 使用 remark 将 Markdown 转换为 HTML
  const processedContent = await remark().use(html).process(termsOfService);
  const termsOfServiceHtml = processedContent.toString();  // 转换后的 HTML

  // 将 HTML 内容作为 props 传递到组件
  return {
    props: {
      termsOfServiceHtml,
    },
  };
}

export default function Terms({ termsOfServiceHtml }) {
  return (
    <div>
      <h1>Terms of Service</h1>
      <div dangerouslySetInnerHTML={{ __html: termsOfServiceHtml }} />
    </div>
  );
}
