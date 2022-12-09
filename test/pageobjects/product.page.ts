class Product {
  /**define all product page objects and actions */

  get products() {
    return $(`//span[text()='Products']`);
  }

  async checkProductsIsDisplayed(testid: string) {
    let isDisplayed = false;
    if (!this.products.elementId) throw Error(`Product Not Found`);
    await this.products.waitForDisplayed({ timeout: 5000 });
    if (await this.products.isDisplayed()) return (isDisplayed = true);
  }
}
export default new Product();
