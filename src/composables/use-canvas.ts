import { ref } from 'vue'
import { open_image, filter, putImageData } from '@silvia-odwyer/photon'
export default function useCanvas() {
  const canvasEl = ref<HTMLCanvasElement | null>(null)
  let canvasCtx: CanvasRenderingContext2D | null = null
  const imgEl = new Image()
  const canvasImgURL = ref('')

  function calculateAspectRatio(
    srcWidth: number,
    srcHeight: number,
    maxWidth: number,
    maxHeight: number
  ) {
    const ratio = Math.min(maxWidth / srcWidth, maxHeight, srcHeight)

    return { width: srcWidth * ratio, height: srcHeight * ratio }
  }

  function loadImg(url: string) {
    if (!canvasEl.value) return

    canvasCtx = canvasEl.value.getContext('2d')
    imgEl.addEventListener('load', drawOriginalImg)

    imgEl.src = url
  }

  function drawOriginalImg() {
    if (!canvasCtx || !canvasEl.value) return
    const newImgRatio = calculateAspectRatio(imgEl.naturalWidth, imgEl.naturalHeight, 448, 448)

    canvasEl.value.width = newImgRatio.width
    canvasEl.value.height = newImgRatio.height
    canvasCtx.drawImage(imgEl, 0, 0, newImgRatio.width, newImgRatio.height)

    canvasImgURL.value = canvasEl.value.toDataURL()
  }

  function filterImg(filterName: string) {
    if (!canvasCtx || !canvasEl.value) return

    const photonImg = open_image(canvasEl.value, canvasCtx)

    if (filterName.length) {
      filter(photonImg, filterName)
    }

    putImageData(canvasEl.value, canvasCtx, photonImg)
    canvasImgURL.value = canvasEl.value.toDataURL()
  }

  return {
    canvasEl,
    loadImg,
    drawOriginalImg,
    filterImg,
    canvasImgURL
  }
}
