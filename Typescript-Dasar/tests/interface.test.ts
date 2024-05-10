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

    it('should support function interface', function (){

        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(2,2)).toBe(4);
    });
});