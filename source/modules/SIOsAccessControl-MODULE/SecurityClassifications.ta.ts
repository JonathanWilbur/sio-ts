/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SecurityClassification,
    _decode_SecurityClassification,
    _encode_SecurityClassification,
} from "../SIOsAccessControl-MODULE/SecurityClassification.ta";
export {
    SecurityClassification,
    _decode_SecurityClassification,
    _encode_SecurityClassification,
} from "../SIOsAccessControl-MODULE/SecurityClassification.ta";

/* START_OF_SYMBOL_DEFINITION SecurityClassifications */
/**
 * @summary SecurityClassifications
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityClassifications  ::=  SEQUENCE SIZE (0..MAX) OF SecurityClassification
 * ```
 */
export type SecurityClassifications = SecurityClassification[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SecurityClassifications */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityClassifications */
let _cached_decoder_for_SecurityClassifications: $.ASN1Decoder<SecurityClassifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityClassifications */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityClassifications */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityClassifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityClassifications} The decoded data structure.
 */
export function _decode_SecurityClassifications(el: _Element) {
    if (!_cached_decoder_for_SecurityClassifications) {
        _cached_decoder_for_SecurityClassifications = $._decodeSequenceOf<SecurityClassification>(
            () => _decode_SecurityClassification
        );
    }
    return _cached_decoder_for_SecurityClassifications(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityClassifications */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityClassifications */
let _cached_encoder_for_SecurityClassifications: $.ASN1Encoder<SecurityClassifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityClassifications */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityClassifications */
/**
 * @summary Encodes a(n) SecurityClassifications into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityClassifications, encoded as an ASN.1 Element.
 */
export function _encode_SecurityClassifications(
    value: SecurityClassifications,
    elGetter: $.ASN1Encoder<SecurityClassifications>
) {
    if (!_cached_encoder_for_SecurityClassifications) {
        _cached_encoder_for_SecurityClassifications = $._encodeSequenceOf<SecurityClassification>(
            () => _encode_SecurityClassification,
            $.BER
        );
    }
    return _cached_encoder_for_SecurityClassifications(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityClassifications */

/* eslint-enable */
