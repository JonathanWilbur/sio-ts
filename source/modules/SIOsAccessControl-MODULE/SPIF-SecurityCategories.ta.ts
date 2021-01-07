/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SecurityCategory,
    _decode_SecurityCategory,
    _encode_SecurityCategory,
} from "../SIOsAccessControl-MODULE/SecurityCategory.ta";
export {
    SecurityCategory,
    _decode_SecurityCategory,
    _encode_SecurityCategory,
} from "../SIOsAccessControl-MODULE/SecurityCategory.ta";

/* START_OF_SYMBOL_DEFINITION SPIF_SecurityCategories */
/**
 * @summary SPIF_SecurityCategories
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPIF-SecurityCategories  ::=  SEQUENCE SIZE (0..MAX) OF SecurityCategory
 * ```
 */
export type SPIF_SecurityCategories = SecurityCategory[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SPIF_SecurityCategories */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SPIF_SecurityCategories */
let _cached_decoder_for_SPIF_SecurityCategories: $.ASN1Decoder<SPIF_SecurityCategories> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SPIF_SecurityCategories */

/* START_OF_SYMBOL_DEFINITION _decode_SPIF_SecurityCategories */
/**
 * @summary Decodes an ASN.1 element into a(n) SPIF_SecurityCategories
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPIF_SecurityCategories} The decoded data structure.
 */
export function _decode_SPIF_SecurityCategories(el: _Element) {
    if (!_cached_decoder_for_SPIF_SecurityCategories) {
        _cached_decoder_for_SPIF_SecurityCategories = $._decodeSequenceOf<SecurityCategory>(
            () => _decode_SecurityCategory
        );
    }
    return _cached_decoder_for_SPIF_SecurityCategories(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SPIF_SecurityCategories */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SPIF_SecurityCategories */
let _cached_encoder_for_SPIF_SecurityCategories: $.ASN1Encoder<SPIF_SecurityCategories> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SPIF_SecurityCategories */

/* START_OF_SYMBOL_DEFINITION _encode_SPIF_SecurityCategories */
/**
 * @summary Encodes a(n) SPIF_SecurityCategories into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPIF_SecurityCategories, encoded as an ASN.1 Element.
 */
export function _encode_SPIF_SecurityCategories(
    value: SPIF_SecurityCategories,
    elGetter: $.ASN1Encoder<SPIF_SecurityCategories>
) {
    if (!_cached_encoder_for_SPIF_SecurityCategories) {
        _cached_encoder_for_SPIF_SecurityCategories = $._encodeSequenceOf<SecurityCategory>(
            () => _encode_SecurityCategory,
            $.BER
        );
    }
    return _cached_encoder_for_SPIF_SecurityCategories(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SPIF_SecurityCategories */

/* eslint-enable */
