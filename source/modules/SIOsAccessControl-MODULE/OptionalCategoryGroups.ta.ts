/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OptionalCategoryGroup,
    _decode_OptionalCategoryGroup,
    _encode_OptionalCategoryGroup,
} from "../SIOsAccessControl-MODULE/OptionalCategoryGroup.ta";
export {
    OptionalCategoryGroup,
    _decode_OptionalCategoryGroup,
    _encode_OptionalCategoryGroup,
} from "../SIOsAccessControl-MODULE/OptionalCategoryGroup.ta";

/* START_OF_SYMBOL_DEFINITION OptionalCategoryGroups */
/**
 * @summary OptionalCategoryGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionalCategoryGroups  ::=  SEQUENCE SIZE (1..MAX) OF OptionalCategoryGroup
 * ```
 */
export type OptionalCategoryGroups = OptionalCategoryGroup[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION OptionalCategoryGroups */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalCategoryGroups */
let _cached_decoder_for_OptionalCategoryGroups: $.ASN1Decoder<OptionalCategoryGroups> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalCategoryGroups */

/* START_OF_SYMBOL_DEFINITION _decode_OptionalCategoryGroups */
/**
 * @summary Decodes an ASN.1 element into a(n) OptionalCategoryGroups
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionalCategoryGroups} The decoded data structure.
 */
export function _decode_OptionalCategoryGroups(el: _Element) {
    if (!_cached_decoder_for_OptionalCategoryGroups) {
        _cached_decoder_for_OptionalCategoryGroups = $._decodeSequenceOf<OptionalCategoryGroup>(
            () => _decode_OptionalCategoryGroup
        );
    }
    return _cached_decoder_for_OptionalCategoryGroups(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OptionalCategoryGroups */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalCategoryGroups */
let _cached_encoder_for_OptionalCategoryGroups: $.ASN1Encoder<OptionalCategoryGroups> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalCategoryGroups */

/* START_OF_SYMBOL_DEFINITION _encode_OptionalCategoryGroups */
/**
 * @summary Encodes a(n) OptionalCategoryGroups into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalCategoryGroups, encoded as an ASN.1 Element.
 */
export function _encode_OptionalCategoryGroups(
    value: OptionalCategoryGroups,
    elGetter: $.ASN1Encoder<OptionalCategoryGroups>
) {
    if (!_cached_encoder_for_OptionalCategoryGroups) {
        _cached_encoder_for_OptionalCategoryGroups = $._encodeSequenceOf<OptionalCategoryGroup>(
            () => _encode_OptionalCategoryGroup,
            $.BER
        );
    }
    return _cached_encoder_for_OptionalCategoryGroups(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OptionalCategoryGroups */

/* eslint-enable */
