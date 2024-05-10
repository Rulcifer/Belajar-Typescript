import { Seller } from "../src/seller"

describe('Interface', function () {
    it('should support in typescript', function () {

        const seller: Seller = {
            id: 1,
            name: 'Toko buku',
            nib: "12312312",
            npwp: "321321321"
        };

        seller.name = "Toko baju";

        console.info(seller);
        
    });
});