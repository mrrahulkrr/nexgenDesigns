
// components/ui/Logo.jsx
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="text-2xl font-bold">П+</span>
      <span className="font-medium">NexGen</span>
      <span className="text-xs text-gray-600">The new-age MEP</span>
    </Link>
  )
}