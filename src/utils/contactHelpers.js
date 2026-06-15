import { profile } from '../data/content'

export function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${profile.name}`,
    `TITLE:${profile.role}`,
    `EMAIL:${profile.email}`,
    `TEL:${profile.phoneTel}`,
    `ADR:;;${profile.address};;;;`,
    `URL:${profile.linkedin}`,
    'NOTE:Full Stack Developer — React Native, Laravel, PHP, Health-tech & Ed-tech',
    'END:VCARD',
  ].join('\n')

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Sharan_Reddy.vcf'
  link.click()
  URL.revokeObjectURL(url)
}

export async function sharePortfolio() {
  const shareData = {
    title: `${profile.name} — ${profile.role}`,
    text: `Check out my portfolio. ${profile.role} open for freelance projects.`,
    url: window.location.href,
  }

  if (navigator.share) {
    try {
      await navigator.share(shareData)
      return true
    } catch {
      return false
    }
  }

  try {
    await navigator.clipboard.writeText(window.location.href)
    return 'copied'
  } catch {
    return false
  }
}
