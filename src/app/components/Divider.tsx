export function Divider() {
  return (
    <div className="flex items-center justify-center py-16">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent/40"
      >
        <circle cx="16" cy="16" r="3" fill="currentColor" />
        <path
          d="M16 8C16 8 12 10 12 14C12 16 13 17 14 17.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M16 8C16 8 20 10 20 14C20 16 19 17 18 17.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
