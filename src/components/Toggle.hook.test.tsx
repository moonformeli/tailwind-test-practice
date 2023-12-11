import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '@/hooks';

describe('Toggle', () => {
  it('changes selected toggle', () => {
    const options = ['A', 'B'];
    const { result } = renderHook(() => useToggle(options));

    expect(result.current.option).toBe(options[0]);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.option).toBe(options[1]);
  });
});
