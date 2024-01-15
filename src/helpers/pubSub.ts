// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class PubSub<Fn extends (...args: any[]) => void> {
  constructor(private subscribers: Set<Fn> = new Set()) {}

  /**
   * Add a subscriber to the list of subscribers
   * @param fn The function to subscribe
   * @returns A function to unsubscribe
   */
  public subscribe(fn: Fn) {
    if (this.subscribers.has(fn)) {
      throw new Error('subscriber already exist!');
    }

    this.subscribers.add(fn);
  }

  /**
   * Sends a notification to all subscribers
   */
  protected notify(...args: Parameters<Fn>) {
    this.subscribers.forEach((fn) => fn(...args));
  }
}
