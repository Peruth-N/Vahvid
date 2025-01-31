import VideoCard from "/components/VideoCard";

export default function Page() {
  return (
    <div className="flex">
      <div className="flex-grow overflow-y-scroll">
        {/* <FormComponent /> */}
        <VideoCard />
      </div>
    </div>
  );
}
