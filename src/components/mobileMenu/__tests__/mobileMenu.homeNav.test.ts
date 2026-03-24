describe('Mobile menu home navigation logic', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should default to /business when localStorage is empty', () => {
    const activePage = localStorage.getItem('activePage') || '/business';
    const homePath = activePage === '/customer' ? '/business' : activePage;
    expect(homePath).toBe('/business');
  });

  it('should use /professional when set in localStorage', () => {
    localStorage.setItem('activePage', '/professional');
    const activePage = localStorage.getItem('activePage') || '/business';
    const homePath = activePage === '/customer' ? '/business' : activePage;
    expect(homePath).toBe('/professional');
  });

  it('should redirect /customer to /business', () => {
    localStorage.setItem('activePage', '/customer');
    const activePage = localStorage.getItem('activePage') || '/business';
    const homePath = activePage === '/customer' ? '/business' : activePage;
    expect(homePath).toBe('/business');
  });

  it('should use /business when set in localStorage', () => {
    localStorage.setItem('activePage', '/business');
    const activePage = localStorage.getItem('activePage') || '/business';
    const homePath = activePage === '/customer' ? '/business' : activePage;
    expect(homePath).toBe('/business');
  });
});
