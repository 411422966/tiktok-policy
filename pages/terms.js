import fs from 'fs';
import path from 'path';
import remark from 'remark';
import remarkHtml from 'remark-html';

export async function getStaticProps() {
  const termsOfServicePath = path.join(process.cwd(), 'public', 'terms-of-service.md');
  const termsOfService = fs.readFileSync(termsOfServicePath, 'utf-8');

  const html = await remark()
    .use(remarkHtml)
    .process(termsOfService);

  return {
    props: {
      termsOfServiceHtml: html.toString(),
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
