export const postCoupon = async (couponId) => {
    const url = `https://shopping.pchome.com.tw/ecapi/marketing/coupon/v2/index.php/coupon?id=${couponId}`;
    console.log('url -- ',url);
    try {
        const response = await fetch(url, {
            method: 'POST',
			credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to post coupon: ${error.message}`);
    }
};