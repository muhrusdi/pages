"use client"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Suspense, useState, ViewTransition } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Grid = ({ photos, id }: { photos: string[]; id: string }) => {
  const [urlImage, setUrlImage] = useState("")

  const handleSetUrlImage = (url: string, val?: boolean) => {
    setUrlImage(url)
  }

  const handleChange = (val: boolean) => {
    if (!val) {
      setUrlImage("")
    }
  }

  return (
    <div>
      <ViewTransition name={`photo-album-${id}`}>
        <div className="mt-4">
          <div>
            <div className="flex items-center gap-2">
              <div>
                <Link href="/photos" className="block">
                  <ArrowLeft size={20} />
                </Link>
              </div>
              <div>
                <ViewTransition name={`photo-album-title-${id}`}>
                  <h1 className="text-2xl capitalize">{id}</h1>
                </ViewTransition>
              </div>
            </div>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {photos?.map(key => (
              <li key={key}>
                <div onClick={() => handleSetUrlImage(key)}>
                  <Image
                    src={`/albums/${id}/${key}`}
                    alt={key}
                    className="h-40 w-full rounded-md object-cover"
                    width={400}
                    height={400}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ViewTransition>
      <Dialog open={Boolean(urlImage)} onOpenChange={handleChange}>
        <DialogTitle hidden>Photo Detail</DialogTitle>
        <DialogContent>
          {urlImage ? (
            // style={{
            //   backgroundImage: `url(${urlDeferred})`,
            // }}
            <Image
              src={`/albums/${id}/${urlImage}`}
              alt={urlImage}
              width={800}
              height={800}
              sizes="100vw"
              className="absolute top-1/2 left-1/2 max-h-screen w-auto max-w-full -translate-x-1/2 -translate-y-1/2"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Grid
