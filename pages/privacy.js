import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const privacyPolicyPath = path.join(process.cwd(), 'public', 'privacy-policy.md');
  const privacyPolicy = fs.readFileSync(privacyPolicyPath, 'utf-8');

  return {
    props: {
      privacyPolicy,
    },
  };
}

export default function Privacy({ privacyPolicy }) {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <div>{privacyPolicy}</div>
    </div>
  );
}
