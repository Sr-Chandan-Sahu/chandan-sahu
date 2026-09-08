const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Resume', id: 'resume' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

interface NavBarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function NavBar({ activeSection, onNavClick }: NavBarProps) {
  return (
    <nav className="w-full">
      <div
        className="flex flex-row items-center justify-between sm:justify-around w-full overflow-x-auto no-scrollbar gap-1"
        style={{
          backgroundColor: 'rgb(30, 30, 31)',
          borderRadius: '24px',
          border: '1px solid rgb(43, 43, 44)',
          padding: '8px 12px',
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className="px-3 sm:px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap text-xs sm:text-sm font-medium flex items-center justify-center"
              style={{
                fontFamily: 'Poppins, sans-serif',
                border: 'none',
                backgroundColor: isActive ? 'rgba(133, 138, 227, 0.18)' : 'transparent',
                color: isActive ? 'rgb(133, 138, 227)' : 'rgb(185, 185, 186)',
                boxShadow: isActive ? 'inset 0 0 0 1px rgba(133, 138, 227, 0.4)' : 'none',
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
