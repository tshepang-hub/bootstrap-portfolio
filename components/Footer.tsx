export default function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Tshepang Baloyi. Built with ❤️ using
            Next.js &amp; TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
