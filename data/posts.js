// Minimal blog data. Add more posts here.
const POSTS = [
  {
    slug: 'hello-world',
    title: 'Xin chào blog ✿',
    date: '2025-10-03',
    tags: ['intro','life'],
    excerpt: 'Chào mừng bạn đến với blog nhỏ xinh của mình!',
    content: `# Chào bạn!
Mình là **Aki**. Đây là nơi mình ghi chú về học tập, CTF và web dev.
Nếu bạn thích, ghé Homework để xem các bài tập gần đây nhé.`
  },
  {
    slug: 'ctf-notes',
    title: 'CTF Notes: SMB & NTLMv2',
    date: '2025-10-02',
    tags: ['ctf','security'],
    excerpt: 'Ghi chú nhanh về SMB enum và NTLMv2 handshake.',
    content: `## SMB Enum
- Sử dụng nmap \`-sU -sT -p 139,445\` và enum4linux-ng.
- Ghi lại NetBIOS name, workgroup, user share.

## NTLMv2
Dò bắt bắt tay bằng Wireshark, lọc \`ntlmssp\`. Lưu ý bảo vệ **hash**!`
  }
];
