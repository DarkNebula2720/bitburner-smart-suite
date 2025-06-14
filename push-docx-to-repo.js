const simpleGit = require('simple-git');
const git = simpleGit();
const FILE_TO_PUSH = 'bitburner-smart-suite-master-FINAL.docx';

async function pushDocx() {
  try {
    await git.add(FILE_TO_PUSH);
    await git.commit('Auto-push master .docx from local script');
    await git.push('origin', 'main');
    console.log('✅ File pushed to GitHub successfully.');
  } catch (err) {
    console.error('❌ Git push failed:', err.message);
  }
}

pushDocx();

