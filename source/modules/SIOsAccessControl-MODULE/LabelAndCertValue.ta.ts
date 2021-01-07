/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION LabelAndCertValue */
/**
 * @summary LabelAndCertValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LabelAndCertValue  ::=  INTEGER(0..MAX)
 * ```
 */
export type LabelAndCertValue = INTEGER;
/* END_OF_SYMBOL_DEFINITION LabelAndCertValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LabelAndCertValue */
let _cached_decoder_for_LabelAndCertValue: $.ASN1Decoder<LabelAndCertValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LabelAndCertValue */

/* START_OF_SYMBOL_DEFINITION _decode_LabelAndCertValue */
/**
 * @summary Decodes an ASN.1 element into a(n) LabelAndCertValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LabelAndCertValue} The decoded data structure.
 */
export function _decode_LabelAndCertValue(el: _Element) {
    if (!_cached_decoder_for_LabelAndCertValue) {
        _cached_decoder_for_LabelAndCertValue = $._decodeInteger;
    }
    return _cached_decoder_for_LabelAndCertValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LabelAndCertValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LabelAndCertValue */
let _cached_encoder_for_LabelAndCertValue: $.ASN1Encoder<LabelAndCertValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LabelAndCertValue */

/* START_OF_SYMBOL_DEFINITION _encode_LabelAndCertValue */
/**
 * @summary Encodes a(n) LabelAndCertValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LabelAndCertValue, encoded as an ASN.1 Element.
 */
export function _encode_LabelAndCertValue(
    value: LabelAndCertValue,
    elGetter: $.ASN1Encoder<LabelAndCertValue>
) {
    if (!_cached_encoder_for_LabelAndCertValue) {
        _cached_encoder_for_LabelAndCertValue = $._encodeInteger;
    }
    return _cached_encoder_for_LabelAndCertValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LabelAndCertValue */

/* eslint-enable */
