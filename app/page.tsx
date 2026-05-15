import { ProfileHeader } from "@/components/profile-header";
import { SubscribeButton } from "@/components/subscribe-button";
import { ContentGrid } from "@/components/content-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-md mx-auto">
        <ProfileHeader />
        <SubscribeButton />
        <ContentGrid />
      </div>
    </main>
  );
}
