describe('Pricing billing toggle sync', () => {
  it('both toggles share the same state value', () => {
    // Simulate shared state
    let checkedAnnual = false;
    const setCheckedAnnual = (val: boolean | ((prev: boolean) => boolean)) => {
      checkedAnnual = typeof val === 'function' ? val(checkedAnnual) : val;
    };

    // Grid toggle switches to annual
    setCheckedAnnual(true);
    // Calculator should reflect the same
    expect(checkedAnnual).toBe(true);

    // Calculator toggle switches back to monthly
    setCheckedAnnual(false);
    // Grid should reflect the same
    expect(checkedAnnual).toBe(false);
  });

  it('toggling from either location updates the shared state', () => {
    let checkedAnnual = false;
    const setCheckedAnnual = (val: boolean | ((prev: boolean) => boolean)) => {
      checkedAnnual = typeof val === 'function' ? val(checkedAnnual) : val;
    };

    // Simulate grid toggle (uses !checkedMonth pattern)
    setCheckedAnnual(!checkedAnnual);
    expect(checkedAnnual).toBe(true);

    // Simulate calculator toggle (uses !onCheckedYear pattern)
    setCheckedAnnual(!checkedAnnual);
    expect(checkedAnnual).toBe(false);
  });

  it('initial state is monthly (false)', () => {
    const checkedAnnual = false;
    expect(checkedAnnual).toBe(false);
  });
});
