/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Applied */
/**
 * @summary Applied
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Applied  ::=  INTEGER {encrypt(0), decrypt(1), both(2)}(encrypt | decrypt | both)
 * ```
 */
export type Applied = INTEGER;
/* END_OF_SYMBOL_DEFINITION Applied */

/* START_OF_SYMBOL_DEFINITION Applied_encrypt */
/**
 * @summary Applied_encrypt
 * @constant
 * @type {number}
 */
export const Applied_encrypt: Applied = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Applied_encrypt */

/* START_OF_SYMBOL_DEFINITION encrypt */
/**
 * @summary Applied_encrypt
 * @constant
 * @type {number}
 */
export const encrypt: Applied = Applied_encrypt; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION encrypt */

/* START_OF_SYMBOL_DEFINITION Applied_decrypt */
/**
 * @summary Applied_decrypt
 * @constant
 * @type {number}
 */
export const Applied_decrypt: Applied = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Applied_decrypt */

/* START_OF_SYMBOL_DEFINITION decrypt */
/**
 * @summary Applied_decrypt
 * @constant
 * @type {number}
 */
export const decrypt: Applied = Applied_decrypt; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION decrypt */

/* START_OF_SYMBOL_DEFINITION Applied_both */
/**
 * @summary Applied_both
 * @constant
 * @type {number}
 */
export const Applied_both: Applied = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Applied_both */

/* START_OF_SYMBOL_DEFINITION both */
/**
 * @summary Applied_both
 * @constant
 * @type {number}
 */
export const both: Applied = Applied_both; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION both */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Applied */
let _cached_decoder_for_Applied: $.ASN1Decoder<Applied> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Applied */

/* START_OF_SYMBOL_DEFINITION _decode_Applied */
/**
 * @summary Decodes an ASN.1 element into a(n) Applied
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Applied} The decoded data structure.
 */
export function _decode_Applied(el: _Element) {
    if (!_cached_decoder_for_Applied) {
        _cached_decoder_for_Applied = $._decodeInteger;
    }
    return _cached_decoder_for_Applied(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Applied */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Applied */
let _cached_encoder_for_Applied: $.ASN1Encoder<Applied> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Applied */

/* START_OF_SYMBOL_DEFINITION _encode_Applied */
/**
 * @summary Encodes a(n) Applied into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Applied, encoded as an ASN.1 Element.
 */
export function _encode_Applied(
    value: Applied,
    elGetter: $.ASN1Encoder<Applied>
) {
    if (!_cached_encoder_for_Applied) {
        _cached_encoder_for_Applied = $._encodeInteger;
    }
    return _cached_encoder_for_Applied(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Applied */

/* eslint-enable */
