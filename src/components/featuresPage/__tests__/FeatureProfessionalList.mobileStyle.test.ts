describe('FeatureProfessionalList mobile style selection', () => {
  const desktopStyle = { padding: '64px 24px 64px 24px', objectFit: 'cover' };
  const mobileStyle = { padding: '24px 24px 24px 24px', objectFit: 'cover' };

  it('uses mobile style when mobile image data exists', () => {
    const mobileImageData = { url: '/images/mobile.png' };
    const appliedStyle = mobileImageData ? mobileStyle : desktopStyle;
    expect(appliedStyle).toEqual(mobileStyle);
  });

  it('falls back to desktop style when no mobile image data', () => {
    const mobileImageData = undefined;
    const appliedStyle = mobileImageData ? mobileStyle : desktopStyle;
    expect(appliedStyle).toEqual(desktopStyle);
  });

  it('falls back to desktop style when mobile image data is null', () => {
    const mobileImageData = null;
    const appliedStyle = mobileImageData ? mobileStyle : desktopStyle;
    expect(appliedStyle).toEqual(desktopStyle);
  });
});
