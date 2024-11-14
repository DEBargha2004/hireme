import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function Page() {
  return (
    <Dialog defaultOpen>
      <DialogContent className="md:max-w-[calc(100vw*0.7)] rounded-lg">
        <DialogHeader>
          <DialogTitle>Welcome to our web3 community👏👏👏</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Over the past few years, we have recognized that web3 is emerging as a
          sector that cannot be overlooked. After extensive research, we believe
          that embracing web3 will help us return more benefits to users during
          the job-seeking process and build a network of personal value. We are
          currently investing substantial resources to create the most valuable
          web3 community in India Joining us as an early contributor will
          qualify you for future airdrop rewards. We welcome you to join our
          Telegram group and become an early core contributor. Telegram link:{" "}
          <Link
            href={"https://t.me/+An600ZYae6dkZWNl"}
            className="text-primary "
          >
            https://t.me/+An600ZYae6dkZWNl
          </Link>
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Got it</Button>
          </DialogClose>
          <Button>Join now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
