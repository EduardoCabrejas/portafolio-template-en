export default function Loader() {
  return (
    <section
      aria-label="Loading portfolio"
      role="status"
      className="w-full h-screen flex flex-col items-center justify-center gap-6"
    >
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-transparent border-t-lightBlue2 rounded-full animate-spin" />
        <div className="absolute inset-2 border-4 border-transparent border-t-darkBlue2 rounded-full animate-spin" />
      </div>
      <p className="text-lightBlue3 text-lg font-semibold">
        Loading portfolio...
      </p>
    </section>
  );
}
