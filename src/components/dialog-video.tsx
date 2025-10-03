import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogVideo() {
  return (
    <Dialog>
      <DialogTrigger className="w-fit bg-secondary hover:bg-secondary/90 text-primary-foreground rounded-full px-10 py-3 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-102 font-sans focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
        Voir une vidéo de présentation
      </DialogTrigger>
      <DialogContent className="aspect-video">
        <DialogHeader>
          <DialogTitle>Présentation cercle de femmes</DialogTitle>
        </DialogHeader>
        <iframe
          className="aspect-video transition-opacity duration-800 starting:opacity-0 rounded-md"
          src="https://www.youtube.com/embed/QukeNFtunXs"
          title="Présentation cercle de femmes en vidéo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}
