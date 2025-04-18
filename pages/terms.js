import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const termsOfServicePath = path.join(process.cwd(), 'public', 'terms-of-service.md');
  const termsOfService = fs.readFileSync(termsOfServicePath, 'utf-8');

  return {
    props: {
      termsOfService,
    },
  };
}

export default function Terms({ termsOfService }) {
  return (
    <div>
      <h1>Terms of Service</h1>
      <div>{termsOfService}</div>
    </div>
  );
}
