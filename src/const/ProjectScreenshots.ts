import ipubers from '@/assets/images/projects/ipubers-private.png'
import numi from '@/assets/images/projects/numi-private.png'
import rekanKios from '@/assets/images/projects/rekan-kios.png'
import portfolio from '@/assets/images/projects/portfolio.png'

export const PROJECT_SCREENSHOTS: Record<string, { src: string; alt: string; redacted: boolean }> = {
  'ipubers-online': { src: ipubers, alt: 'iPubers order dashboard with retailer identity and order number blurred', redacted: true },
  'rekan-kios': { src: rekanKios, alt: 'Rekan Kios home dashboard for subsidized fertilizer and other products', redacted: false },
  numi: { src: numi, alt: 'Numi sales dashboard with user avatar blurred', redacted: true },
  portofolio: { src: portfolio, alt: 'Hilmy personal portfolio homepage', redacted: false },
}
