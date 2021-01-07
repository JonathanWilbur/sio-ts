/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SPIFVersionNumber */
/**
 * @summary SPIFVersionNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPIFVersionNumber  ::=  INTEGER(0..MAX)
 * ```
 */
export type SPIFVersionNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION SPIFVersionNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SPIFVersionNumber */
let _cached_decoder_for_SPIFVersionNumber: $.ASN1Decoder<SPIFVersionNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SPIFVersionNumber */

/* START_OF_SYMBOL_DEFINITION _decode_SPIFVersionNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) SPIFVersionNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPIFVersionNumber} The decoded data structure.
 */
export function _decode_SPIFVersionNumber(el: _Element) {
    if (!_cached_decoder_for_SPIFVersionNumber) {
        _cached_decoder_for_SPIFVersionNumber = $._decodeInteger;
    }
    return _cached_decoder_for_SPIFVersionNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SPIFVersionNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SPIFVersionNumber */
let _cached_encoder_for_SPIFVersionNumber: $.ASN1Encoder<SPIFVersionNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SPIFVersionNumber */

/* START_OF_SYMBOL_DEFINITION _encode_SPIFVersionNumber */
/**
 * @summary Encodes a(n) SPIFVersionNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPIFVersionNumber, encoded as an ASN.1 Element.
 */
export function _encode_SPIFVersionNumber(
    value: SPIFVersionNumber,
    elGetter: $.ASN1Encoder<SPIFVersionNumber>
) {
    if (!_cached_encoder_for_SPIFVersionNumber) {
        _cached_encoder_for_SPIFVersionNumber = $._encodeInteger;
    }
    return _cached_encoder_for_SPIFVersionNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SPIFVersionNumber */

/* eslint-enable */
