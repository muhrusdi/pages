"use client"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useDeferredValue, useState, ViewTransition } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

const Grid = ({ photos, id }: { photos: string[]; id: string }) => {
  const [urlImage, setUrlImage] = useState("")
  const urlDeferred = useDeferredValue(urlImage)

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
            <h1 className="text-2xl capitalize">{id}</h1>
          </div>
          <ul className="mt-3 grid grid-cols-3 gap-2">
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
            <ViewTransition name={urlImage}>
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
