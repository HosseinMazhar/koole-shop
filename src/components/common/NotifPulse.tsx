export default function NotifPulse() {
  return (
    <>
      <span className="block absolute w-2 rounded-full bg-yellow-500 text-white aspect-square text-sm top-[-2px] right-[-2px]" />
      <span className="block absolute w-2 rounded-full bg-yellow-500 text-white aspect-square text-sm top-[-2px] right-[-2px] animate-ping" />
    </>
  );
}
