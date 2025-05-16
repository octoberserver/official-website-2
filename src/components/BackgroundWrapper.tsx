import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export default function BackgroundWrapper({ children, image, className }: { children: React.ReactNode, image: string | StaticImport, className?: string }) {
    return (
        <div className="relative">
            <Image
            layout="fill"
            className="object-center object-cover pointer-events-none"
            src={image}
            alt={"background image"}
            />
            <div className={`relative z-1 ${className}`}>
                {children}
            </div>
        </div>
    )
}
