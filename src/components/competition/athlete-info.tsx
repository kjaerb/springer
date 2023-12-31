import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/components/ui/loading";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { initialsAvatar } from "@/lib/dicebear";

interface AthleteInfoProps {
  imgUrl?: string;
  name: string;
  sport: string;
}

export function AthleteInfo({ imgUrl, name, sport }: AthleteInfoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn("flex items-center cursor-pointer")}>
          <Avatar className="dark:border dark:border-gray-500">
            <AvatarImage
              src={imgUrl ? imgUrl : initialsAvatar(name)}
              alt="athlete-image"
              className="object-cover h-full w-full"
            />
            <AvatarFallback>
              <LoadingSpinner />
            </AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h3 className="font-bold text-lg ">{name}</h3>
            <p className="text-gray-500 dark:text-gray-300 uppercase">
              {sport}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="ml-4">
          <h3 className="font-bold text-lg ">{name}</h3>
          <p className="text-gray-500 dark:text-gray-300 uppercase">{sport}</p>
        </div>
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="athlete-image"
            height={1920 / 4}
            width={1080 / 4}
            className="object-contain mx-auto rounded-md shadow-md"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
