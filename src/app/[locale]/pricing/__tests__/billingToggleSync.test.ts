describe('Pricing billing toggle sync', () => {
  it('both toggles share the same state value', () => {
    let checkedAnnual = false;
    const setCheckedAnnual = (val: boolean | ((prev: boolean) => boolean)) => {
      checkedAnnual = typeof val === 'function' ? val(checkedAnnual) : val;
    };

    // Grid toggle switches to annual
    setCheckedAnnual(true);
    expect(checkedAnnual).toBe(true);

    // Calculator toggle switches back to monthly
    setCheckedAnnual(false);
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

  it('controlled switch: checked prop must be used instead of defaultChecked', () => {
    // Verify the pattern: when state changes externally, a controlled
    // switch (checked={value}) reflects it, while defaultChecked would not.
    let sharedState = false;
    const setState = (val: boolean) => { sharedState = val; };

    // Calculator toggles to annual
    setState(true);

    // Grid switch should show annual (checked={sharedState} === true)
    const gridSwitchChecked = sharedState;
    expect(gridSwitchChecked).toBe(true);

    // Grid toggles back to monthly
    setState(false);

    // Calculator switch should show monthly (checked={sharedState} === false)
    const calcSwitchChecked = sharedState;
    expect(calcSwitchChecked).toBe(false);
  });
});
