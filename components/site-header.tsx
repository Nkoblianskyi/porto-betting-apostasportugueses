import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="h-14 flex items-center justify-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/favicon.ico" alt="logo" width={24} height={24} />
            <span className="text-lg font-bold text-foreground">
              Apostas<span className="text-primary">Portugueses</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/favicon.ico" alt="logo" width={24} height={24} />
              <div>
                <span className="text-xl font-bold text-foreground">
                  Apostas<span className="text-primary">Portugueses</span>
                </span>
                
              </div>
            </Link>

          </div>
        </div>
      </div>
    </header>
  )
}
