import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
}

export function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[94vw] border-none bg-transparent p-0 text-white shadow-none sm:rounded-none">
        <DialogTitle className="sr-only">{alt || "Image preview"}</DialogTitle>
        <div className="relative h-[85vh] w-full">
          <Image src={src} alt={alt} fill sizes="94vw" className="object-contain" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
