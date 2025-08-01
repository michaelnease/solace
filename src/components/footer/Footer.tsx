export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Solace Advocates. All rights reserved.
      </div>
    </footer>
  );
}
