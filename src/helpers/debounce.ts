import { debounce } from 'lodash-es';

export class Debounce<T> {
  private items: T[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private debounceFn: ((...args: any[]) => Promise<any>) | undefined;
  private debounce = debounce(this.debounceFunction, 200);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public run(person: T, fn: (...args: any[]) => Promise<any>) {
    this.debounceFn = fn;
    this.items.push(person);

    return this.debounce();
  }

  private async debounceFunction() {
    if (this.debounceFn && typeof this.debounceFn === 'function') {
      return await Promise.all(
        this.items.map(async (x) => this.debounceFn!(x))
      );
    }
  }
}

// export function asyncDebounce<F extends (...args: any[]) => Promise<any>>(
//   func: F,
//   wait?: number
// ) {
//   console.log('ik om aklfjdslkafj lkaj lkfadsj');
//   const resolveSet = new Set<(p: any) => void>();
//   const rejectSet = new Set<(p: any) => void>();

//   const debounced = debounce((args: Parameters<F>) => {
//     func(...args)
//       .then((...res) => {
//         resolveSet.forEach((resolve) => resolve(...res));
//         resolveSet.clear();
//       })
//       .catch((...res) => {
//         rejectSet.forEach((reject) => reject(...res));
//         rejectSet.clear();
//       });
//   }, wait);

//   return (...args: Parameters<F>): ReturnType<F> =>
//     new Promise((resolve, reject) => {
//       resolveSet.add(resolve);
//       rejectSet.add(reject);
//       debounced(args);
//     }) as ReturnType<F>;
// }
