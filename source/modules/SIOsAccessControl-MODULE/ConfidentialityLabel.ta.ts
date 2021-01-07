/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PrivacyMark,
    _decode_PrivacyMark,
    _encode_PrivacyMark,
} from "../SIOsAccessControl-MODULE/PrivacyMark.ta";
import {
    SecurityCategories,
    _decode_SecurityCategories,
    _encode_SecurityCategories,
} from "../SIOsAccessControl-MODULE/SecurityCategories.ta";
import {
    SecurityPolicyIdentifier,
    _decode_SecurityPolicyIdentifier,
    _encode_SecurityPolicyIdentifier,
} from "../SIOsAccessControl-MODULE/SecurityPolicyIdentifier.ta";
export {
    PrivacyMark,
    _decode_PrivacyMark,
    _encode_PrivacyMark,
} from "../SIOsAccessControl-MODULE/PrivacyMark.ta";
export {
    SecurityCategories,
    _decode_SecurityCategories,
    _encode_SecurityCategories,
} from "../SIOsAccessControl-MODULE/SecurityCategories.ta";
export {
    SecurityPolicyIdentifier,
    _decode_SecurityPolicyIdentifier,
    _encode_SecurityPolicyIdentifier,
} from "../SIOsAccessControl-MODULE/SecurityPolicyIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION ConfidentialityLabel */
/**
 * @summary ConfidentialityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConfidentialityLabel ::= SET {
 *   security-policy-identifier  SecurityPolicyIdentifier OPTIONAL,
 *   security-classification     INTEGER(0..MAX) OPTIONAL,
 *   privacy-mark                PrivacyMark OPTIONAL,
 *   security-categories         SecurityCategories OPTIONAL
 * }(ALL EXCEPT ({ -- none; at least one component shall be present --}))
 * ```
 *
 * @class
 */
export class ConfidentialityLabel {
    constructor(
        /**
         * @summary `security_policy_identifier`.
         * @public
         * @readonly
         */
        readonly security_policy_identifier: OPTIONAL<SecurityPolicyIdentifier>,
        /**
         * @summary `security_classification`.
         * @public
         * @readonly
         */
        readonly security_classification: OPTIONAL<INTEGER>,
        /**
         * @summary `privacy_mark`.
         * @public
         * @readonly
         */
        readonly privacy_mark: OPTIONAL<PrivacyMark>,
        /**
         * @summary `security_categories`.
         * @public
         * @readonly
         */
        readonly security_categories: OPTIONAL<SecurityCategories>
    ) {}

    /**
     * @summary Restructures an object into a ConfidentialityLabel
     * @description
     *
     * This takes an `object` and converts it to a `ConfidentialityLabel`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConfidentialityLabel`.
     * @returns {ConfidentialityLabel}
     */
    public static _from_object(
        _o: { [_K in keyof ConfidentialityLabel]: ConfidentialityLabel[_K] }
    ): ConfidentialityLabel {
        return new ConfidentialityLabel(
            _o.security_policy_identifier,
            _o.security_classification,
            _o.privacy_mark,
            _o.security_categories
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ConfidentialityLabel */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConfidentialityLabel */
/**
 * @summary The Leading Root Component Types of ConfidentialityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConfidentialityLabel: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "security-policy-identifier",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "security-classification",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "privacy-mark",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "security-categories",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConfidentialityLabel */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConfidentialityLabel */
/**
 * @summary The Trailing Root Component Types of ConfidentialityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConfidentialityLabel: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConfidentialityLabel */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConfidentialityLabel */
/**
 * @summary The Extension Addition Component Types of ConfidentialityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConfidentialityLabel: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConfidentialityLabel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConfidentialityLabel */
let _cached_decoder_for_ConfidentialityLabel: $.ASN1Decoder<ConfidentialityLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConfidentialityLabel */

/* START_OF_SYMBOL_DEFINITION _decode_ConfidentialityLabel */
/**
 * @summary Decodes an ASN.1 element into a(n) ConfidentialityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConfidentialityLabel} The decoded data structure.
 */
export function _decode_ConfidentialityLabel(el: _Element) {
    if (!_cached_decoder_for_ConfidentialityLabel) {
        _cached_decoder_for_ConfidentialityLabel = function (
            el: _Element
        ): ConfidentialityLabel {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let security_policy_identifier: OPTIONAL<SecurityPolicyIdentifier>;
            let security_classification: OPTIONAL<INTEGER>;
            let privacy_mark: OPTIONAL<PrivacyMark>;
            let security_categories: OPTIONAL<SecurityCategories>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "security-policy-identifier": (_el: _Element): void => {
                    security_policy_identifier = _decode_SecurityPolicyIdentifier(
                        _el
                    );
                },
                "security-classification": (_el: _Element): void => {
                    security_classification = $._decodeInteger(_el);
                },
                "privacy-mark": (_el: _Element): void => {
                    privacy_mark = _decode_PrivacyMark(_el);
                },
                "security-categories": (_el: _Element): void => {
                    security_categories = _decode_SecurityCategories(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ConfidentialityLabel,
                _extension_additions_list_spec_for_ConfidentialityLabel,
                _root_component_type_list_2_spec_for_ConfidentialityLabel,
                undefined
            );
            return new ConfidentialityLabel /* SET_CONSTRUCTOR_CALL */(
                security_policy_identifier,
                security_classification,
                privacy_mark,
                security_categories
            );
        };
    }
    return _cached_decoder_for_ConfidentialityLabel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConfidentialityLabel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConfidentialityLabel */
let _cached_encoder_for_ConfidentialityLabel: $.ASN1Encoder<ConfidentialityLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConfidentialityLabel */

/* START_OF_SYMBOL_DEFINITION _encode_ConfidentialityLabel */
/**
 * @summary Encodes a(n) ConfidentialityLabel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfidentialityLabel, encoded as an ASN.1 Element.
 */
export function _encode_ConfidentialityLabel(
    value: ConfidentialityLabel,
    elGetter: $.ASN1Encoder<ConfidentialityLabel>
) {
    if (!_cached_encoder_for_ConfidentialityLabel) {
        _cached_encoder_for_ConfidentialityLabel = function (
            value: ConfidentialityLabel,
            elGetter: $.ASN1Encoder<ConfidentialityLabel>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.security_policy_identifier ===
                        undefined
                            ? undefined
                            : _encode_SecurityPolicyIdentifier(
                                  value.security_policy_identifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.security_classification ===
                        undefined
                            ? undefined
                            : $._encodeInteger(
                                  value.security_classification,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.privacy_mark === undefined
                            ? undefined
                            : _encode_PrivacyMark(value.privacy_mark, $.BER),
                        /* IF_ABSENT  */ value.security_categories === undefined
                            ? undefined
                            : _encode_SecurityCategories(
                                  value.security_categories,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConfidentialityLabel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConfidentialityLabel */

/* eslint-enable */
