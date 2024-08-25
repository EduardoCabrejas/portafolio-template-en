
export const setTheme = (theme: 'light' | 'dark') => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  
  export const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  
  export const loadTheme = (): 'light' | 'dark' => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    return savedTheme;
  };
  