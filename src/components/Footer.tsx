export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      <div className="mb-2">
        <a
          href="https://tobiasmaneschijn.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          tobiasmaneschijn
        </a>
      </div>
      <p>
      <a
      href="https://github.com/tobiasmaneschijn"
      target="_blank"
      rel="noreferrer"
      className="inline-block"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 inline-block text-blue-400 hover:text-blue-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-1.055-.014-1.976-2.782.602-3.369-1.336-3.369-1.336-.454-1.153-1.109-1.462-1.109-1.462-.906-.618.069-.605.069-.605.999.07 1.525 1.025 1.525 1.025.889 1.524 2.336 1.084 2.905.829.091-.645.349-1.084.635-1.332-2.22-.251-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.251-.446-1.261.098-2.635 0 0 .84-.268 2.75 1.025A9.564 9.564 0 0112 6.839c.851.003 1.7.115 2.5.337 1.909-1.294 2.748-1.025 2.748-1.025.544 1.374.202 2.384.1 2.635.639.698 1.028 1.59 1.028 2.682 0 3.842-2.337 4.687-4.565 4.935.359.309.679.917.679 1.852 0 1.335-.012 2.415-.012 2.741 0 .267.18.578.688.479C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        />
      </svg>
    </a>
      </p>
    </footer>
  );
};
