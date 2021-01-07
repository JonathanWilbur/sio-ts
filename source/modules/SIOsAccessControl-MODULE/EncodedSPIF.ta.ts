/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION EncodedSPIF */
/**
 * @summary EncodedSPIF
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedSPIF  ::=  TYPE-IDENTIFIER.&Type(SPIF)
 * ```
 */
export type EncodedSPIF = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION EncodedSPIF */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedSPIF */
let _cached_decoder_for_EncodedSPIF: $.ASN1Decoder<EncodedSPIF> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedSPIF */

/* START_OF_SYMBOL_DEFINITION _decode_EncodedSPIF */
/**
 * @summary Decodes an ASN.1 element into a(n) EncodedSPIF
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncodedSPIF} The decoded data structure.
 */
export function _decode_EncodedSPIF(el: _Element) {
    if (!_cached_decoder_for_EncodedSPIF) {
        _cached_decoder_for_EncodedSPIF = $._decodeAny;
    }
    return _cached_decoder_for_EncodedSPIF(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncodedSPIF */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedSPIF */
let _cached_encoder_for_EncodedSPIF: $.ASN1Encoder<EncodedSPIF> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedSPIF */

/* START_OF_SYMBOL_DEFINITION _encode_EncodedSPIF */
/**
 * @summary Encodes a(n) EncodedSPIF into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncodedSPIF, encoded as an ASN.1 Element.
 */
export function _encode_EncodedSPIF(
    value: EncodedSPIF,
    elGetter: $.ASN1Encoder<EncodedSPIF>
) {
    if (!_cached_encoder_for_EncodedSPIF) {
        _cached_encoder_for_EncodedSPIF = $._encodeAny;
    }
    return _cached_encoder_for_EncodedSPIF(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncodedSPIF */

/* eslint-enable */
