"use client"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useState, ViewTransition } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

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
                {!urlImage ? (
                  <ViewTransition name={key}>
                    <div onClick={() => handleSetUrlImage(key)}>
                      <img
                        src={`/albums/${id}/${key}`}
                        alt={key}
                        className="h-40 w-full rounded-md object-cover"
                      />
                    </div>
                  </ViewTransition>
                ) : (
                  <ViewTransition>
                    <div onClick={() => handleSetUrlImage(key)}>
                      <img
                        src={`/albums/${id}/${key}`}
                        alt={key}
                        className="h-40 w-full rounded-md object-cover"
                      />
                    </div>
                  </ViewTransition>
                )}
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
            <ViewTransition>
              <img
                src={`/albums/${id}/${urlImage}`}
                alt=""
                className="absolute top-1/2 left-1/2 max-h-screen w-auto max-w-full -translate-x-1/2 -translate-y-1/2"
              />
            </ViewTransition>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Grid
