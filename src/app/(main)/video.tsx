'use client'

import { useRef } from "react"
import { PlayCircle, X } from "lucide-react"

export default function Video() {
  const DialogRef = useRef<HTMLDialogElement>(null)
  const VideoRef = useRef<HTMLVideoElement>(null)

  const onOpenDialog = () => {
    DialogRef.current?.showModal()
  }

  const onClosedialog = () => {
    DialogRef.current?.close()
    VideoRef.current?.pause()
  }

  return (
    <div>
      <div onClick={onOpenDialog} className='lg:w-[1015px] lg:h-[571px] mx-auto lg:mt-14 rounded-3xl cursor-pointer text-secondary bg-gradient-to-bl from-primary to-[#5C4308] flex justify-center items-center'>
        <PlayCircle size={128} strokeWidth={1} />
      </div>
      <dialog id="video-stematel-dialog" ref={DialogRef} className="bg-transparent backdrop:backdrop-blur-sm p-0">
        <div className="flex justify-end">
          <button onClick={onClosedialog} className="mb-6 text-secondary focus:ring-0">
            <X size={36} />
          </button>
        </div>
        <video id="video-background-stematel25" ref={VideoRef} controls className="w-full rounded-3xl">
          <source src="https://res.cloudinary.com/daan17b95/video/upload/v1676192016/Videos/jumbotron-video_sruocc.mp4" type="video/mp4" />
          Browser tidak mendukung tag video.
        </video>
        <p className='mt-4 text-primary'>a video by</p>
      </dialog>
    </div>
  )
}