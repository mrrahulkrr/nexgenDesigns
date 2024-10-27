
// components/ui/Logo.jsx
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <img src="https://res.cloudinary.com/dic3orh1e/image/upload/v1730053952/NEX-GEN_final_edplve.png" 
           alt="nexgen_logo" className="h-[50px]" />
      <span className="font-medium">NexGen</span>
      <span className="text-xs text-gray-600">The new-age MEP</span>
    </Link>
  )
}